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
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function CustomOrdersPage() {
  const [formData, setFormData] = useState({
    name: '',
    productType: '',
    eventType: '',
    quantity: '',
    customMessage: '',
    dateRequired: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const submitMutation = useSubmitCustomOrder();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitMutation.mutateAsync({
        name: formData.name,
        productType: formData.productType,
        eventType: formData.eventType,
        quantity: BigInt(formData.quantity || '1'),
        customMessage: formData.customMessage,
        dateRequired: formData.dateRequired,
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
      productType: '',
      eventType: '',
      quantity: '',
      customMessage: '',
      dateRequired: '',
    });
    setShowSuccess(false);
  };

  const productTypes = [
    'Natural Flower Bouquet',
    'Artificial Flower Bouquet',
    'Ribbon Flower Bouquet',
    'Pipe Cleaner Flower Bouquet',
    'Polaroid',
    'Bookmark',
    'Customized Card',
    'Other',
  ];

  const eventTypes = [
    'Birthday',
    'Wedding',
    'Anniversary',
    'Farewell',
    'Graduation',
    'Valentine\'s Day',
    'Mother\'s Day',
    'Father\'s Day',
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
                  <p className="text-base font-medium text-foreground">
                    DM us on Instagram for quick custom orders
                  </p>
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

                    {/* Product Type */}
                    <div className="space-y-2">
                      <Label htmlFor="productType">Product Type *</Label>
                      <Select
                        value={formData.productType}
                        onValueChange={(value) => setFormData({ ...formData, productType: value })}
                        required
                      >
                        <SelectTrigger id="productType" className="rounded-lg">
                          <SelectValue placeholder="Select a product type" />
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

                    {/* Event Type */}
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type *</Label>
                      <Select
                        value={formData.eventType}
                        onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                        required
                      >
                        <SelectTrigger id="eventType" className="rounded-lg">
                          <SelectValue placeholder="Select an event type" />
                        </SelectTrigger>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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

                    {/* Custom Message */}
                    <div className="space-y-2">
                      <Label htmlFor="customMessage">Custom Message</Label>
                      <Textarea
                        id="customMessage"
                        placeholder="Tell us about your vision, preferred colors, themes, or any special requests..."
                        value={formData.customMessage}
                        onChange={(e) => setFormData({ ...formData, customMessage: e.target.value })}
                        rows={4}
                        className="rounded-lg resize-none"
                      />
                    </div>

                    {/* Date Required */}
                    <div className="space-y-2">
                      <Label htmlFor="dateRequired">Date Required *</Label>
                      <Input
                        id="dateRequired"
                        type="date"
                        value={formData.dateRequired}
                        onChange={(e) => setFormData({ ...formData, dateRequired: e.target.value })}
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
