import { useState } from 'react';
import { Section, SectionHeader } from '@/components/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSubmitCustomOrder } from '@/hooks/useQueries';
import { SiInstagram } from 'react-icons/si';
import { CheckCircle2, Loader2, Upload, X } from 'lucide-react';
import { ExternalBlob } from '../backend';

export default function CustomOrdersPage() {
  const [formData, setFormData] = useState({
    name: '',
    product: '',
    category: '',
    phoneNumber: '',
    email: '',
    quantity: '',
    customizationDetails: '',
    deliveryDate: '',
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const submitMutation = useSubmitCustomOrder();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...filesArray]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Convert files to ExternalBlob instances
      const imageBlobs: ExternalBlob[] = [];
      for (const file of selectedFiles) {
        const arrayBuffer = await file.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        const blob = ExternalBlob.fromBytes(uint8Array);
        imageBlobs.push(blob);
      }

      await submitMutation.mutateAsync({
        name: formData.name,
        product: formData.product,
        category: formData.category,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        quantity: BigInt(formData.quantity || '1'),
        customizationDetails: formData.customizationDetails,
        images: imageBlobs,
        deliveryDate: formData.deliveryDate,
      });
      
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to submit order:', error);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      product: '',
      category: '',
      phoneNumber: '',
      email: '',
      quantity: '',
      customizationDetails: '',
      deliveryDate: '',
    });
    setSelectedFiles([]);
    setShowSuccess(false);
  };

  const productTypes = [
    'Ribbon Flower Bouquet',
    'Artificial Flower Bouquet',
    'Natural Flower Bouquet',
    'Pipe Cleaner Flower Bouquet',
    'Polaroid Bouquet',
    'Customized Polaroid Bouquet',
    'Polaroid Prints',
    'Polaroid Book',
    'Magazine Style Memory Album',
    'Bookmark',
    'Customized Card',
    'Cute Accessories',
    'Other',
  ];

  const categories = [
    'Birthday',
    'Wedding',
    'Anniversary',
    'Farewell',
    'Graduation',
    'Valentine\'s Day',
    'Mother\'s Day',
    'Father\'s Day',
    'Bridal Shower',
    'Baby Shower',
    'Return Gift',
    'Other',
  ];

  return (
    <div className="w-full">
      <Section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-cyan-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Custom Orders"
            subtitle="Tell us about your dream creation"
          />
        </div>
      </Section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Instagram CTA */}
            <Card className="border-primary/20 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center space-x-3 text-center">
                  <SiInstagram className="h-6 w-6 text-primary" />
                  <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                    <p className="text-base font-medium text-foreground">
                      DM us on Instagram
                    </p>
                    <a
                      href="https://instagram.com/_the.desva_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-primary hover:underline"
                    >
                      @_the.desva_
                    </a>
                    <p className="text-base font-medium text-foreground">
                      for quick custom orders
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Place Your Custom Order</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showSuccess ? (
                  <div className="space-y-6 text-center py-8">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">Order Submitted!</h3>
                      <p className="text-muted-foreground">
                        Thank you for your order. We'll contact you soon to discuss the details.
                      </p>
                    </div>
                    <Button onClick={handleReset} variant="outline" className="rounded-full">
                      Submit Another Order
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="rounded-lg"
                      />
                    </div>

                    {/* Product */}
                    <div className="space-y-2">
                      <Label htmlFor="product">Product *</Label>
                      <Select
                        value={formData.product}
                        onValueChange={(value) => setFormData({ ...formData, product: value })}
                        required
                      >
                        <SelectTrigger id="product" className="rounded-lg">
                          <SelectValue placeholder="Select a product" />
                        </SelectTrigger>
                        <SelectContent>
                          {productTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                        required
                      >
                        <SelectTrigger id="category" className="rounded-lg">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone Number *</Label>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        placeholder="Your contact number"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        required
                        className="rounded-lg"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="rounded-lg"
                      />
                    </div>

                    {/* Quantity */}
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity *</Label>
                      <Input
                        id="quantity"
                        type="number"
                        min="1"
                        placeholder="How many do you need?"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        required
                        className="rounded-lg"
                      />
                    </div>

                    {/* Customization Details */}
                    <div className="space-y-2">
                      <Label htmlFor="customizationDetails">Customization Details</Label>
                      <Textarea
                        id="customizationDetails"
                        placeholder="Tell us about your vision, preferred colors, themes, or any special requests..."
                        value={formData.customizationDetails}
                        onChange={(e) => setFormData({ ...formData, customizationDetails: e.target.value })}
                        rows={4}
                        className="rounded-lg resize-none"
                      />
                    </div>

                    {/* Image Upload */}
                    <div className="space-y-2">
                      <Label htmlFor="images">Upload Images (Optional)</Label>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Input
                            id="images"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleFileChange}
                            className="rounded-lg"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => document.getElementById('images')?.click()}
                          >
                            <Upload className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        {selectedFiles.length > 0 && (
                          <div className="space-y-2">
                            {selectedFiles.map((file, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between p-2 rounded-lg bg-muted/50"
                              >
                                <span className="text-sm text-foreground truncate flex-1">
                                  {file.name}
                                </span>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => removeFile(index)}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Delivery Date */}
                    <div className="space-y-2">
                      <Label htmlFor="deliveryDate">Delivery Date *</Label>
                      <Input
                        id="deliveryDate"
                        type="date"
                        value={formData.deliveryDate}
                        onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                        required
                        className="rounded-lg"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full rounded-full py-6 text-base font-medium"
                      disabled={submitMutation.isPending}
                    >
                      {submitMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Submit Order'
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
