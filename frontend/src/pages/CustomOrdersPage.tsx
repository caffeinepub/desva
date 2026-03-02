import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ArrowLeft, CheckCircle, Loader2, Link } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { useActor } from '../hooks/useActor';
import { SiInstagram } from 'react-icons/si';

interface OrderForm {
  customerName: string;
  phoneNumber: string;
  instagramId: string;
  productName: string;
  customizationDetails: string;
  quantity: string;
  deliveryAddress: string;
  preferredDeliveryDate: string;
}

const initialForm: OrderForm = {
  customerName: '',
  phoneNumber: '',
  instagramId: '',
  productName: '',
  customizationDetails: '',
  quantity: '1',
  deliveryAddress: '',
  preferredDeliveryDate: '',
};

export default function CustomOrdersPage() {
  const navigate = useNavigate();
  const { actor } = useActor();
  const [form, setForm] = useState<OrderForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: OrderForm) => {
      if (!actor) throw new Error('Not connected');
      return actor.submitCustomOrder(
        data.customerName,
        data.phoneNumber,
        data.instagramId,
        data.productName,
        data.customizationDetails,
        BigInt(parseInt(data.quantity) || 1),
        data.deliveryAddress,
        data.preferredDeliveryDate,
      );
    },
    onSuccess: () => {
      setSubmitted(true);
      setForm(initialForm);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-luxury p-12 max-w-md w-full text-center animate-fade-in">
          <CheckCircle size={56} className="text-green-400 mx-auto mb-4" />
          <h2 className="font-display text-3xl text-rosegold mb-3 tracking-wide">Order Placed! 🎉</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Thank you for your order! We'll reach out to you soon on Instagram.
          </p>
          <a
            href="https://instagram.com/_the.desva_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-rosegold hover:underline mb-6"
          >
            <SiInstagram size={16} />
            @_the.desva_
          </a>
          <div>
            <button
              onClick={() => { setSubmitted(false); navigate({ to: '/' }); }}
              className="px-8 py-3 bg-rosegold text-white rounded-full font-medium shadow-soft hover:shadow-luxury transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-gradient-to-br from-blush via-cream to-blush/50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => navigate({ to: '/' })}
            className="flex items-center gap-2 text-dusty-rose hover:text-rosegold transition-colors mb-6 text-sm"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>
          <div className="text-center animate-fade-in">
            <div className="text-5xl mb-4">🛒</div>
            <h1 className="font-display text-4xl md:text-5xl text-rosegold tracking-wide mb-3">Order Through This Link</h1>
            <div className="flex items-center justify-center gap-2 bg-white/70 rounded-full px-5 py-2 w-fit mx-auto border border-blush/50 shadow-soft">
              <Link size={14} className="text-rosegold" />
              <span className="text-sm text-dusty-rose font-medium">www.desva.com/order</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-soft border border-blush/40 p-8 animate-fade-in">
          <h2 className="font-display text-2xl text-rosegold mb-6 tracking-wide text-center">Place Your Order</h2>

          {mutation.isError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-2xl text-sm text-red-600">
              Something went wrong. Please try again or DM us on Instagram{' '}
              <a href="https://instagram.com/_the.desva_" target="_blank" rel="noopener noreferrer" className="underline font-medium">
                @_the.desva_
              </a>.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dusty-rose mb-1.5">Customer Name *</label>
                <input
                  name="customerName"
                  value={form.customerName}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-2xl border border-blush/60 bg-blush/10 text-sm focus:outline-none focus:ring-2 focus:ring-rosegold/30 focus:border-rosegold/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dusty-rose mb-1.5">Phone Number *</label>
                <input
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-2xl border border-blush/60 bg-blush/10 text-sm focus:outline-none focus:ring-2 focus:ring-rosegold/30 focus:border-rosegold/50 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dusty-rose mb-1.5">Instagram ID *</label>
                <input
                  name="instagramId"
                  value={form.instagramId}
                  onChange={handleChange}
                  required
                  placeholder="@yourusername"
                  className="w-full px-4 py-3 rounded-2xl border border-blush/60 bg-blush/10 text-sm focus:outline-none focus:ring-2 focus:ring-rosegold/30 focus:border-rosegold/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dusty-rose mb-1.5">Product Name *</label>
                <input
                  name="productName"
                  value={form.productName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Ribbon Bouquet"
                  className="w-full px-4 py-3 rounded-2xl border border-blush/60 bg-blush/10 text-sm focus:outline-none focus:ring-2 focus:ring-rosegold/30 focus:border-rosegold/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dusty-rose mb-1.5">Customization Details *</label>
              <textarea
                name="customizationDetails"
                value={form.customizationDetails}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Describe your customization requirements..."
                className="w-full px-4 py-3 rounded-2xl border border-blush/60 bg-blush/10 text-sm focus:outline-none focus:ring-2 focus:ring-rosegold/30 focus:border-rosegold/50 transition-all resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dusty-rose mb-1.5">Quantity *</label>
                <input
                  name="quantity"
                  type="number"
                  min="1"
                  value={form.quantity}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-blush/60 bg-blush/10 text-sm focus:outline-none focus:ring-2 focus:ring-rosegold/30 focus:border-rosegold/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dusty-rose mb-1.5">Preferred Delivery Date *</label>
                <input
                  name="preferredDeliveryDate"
                  type="date"
                  value={form.preferredDeliveryDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-blush/60 bg-blush/10 text-sm focus:outline-none focus:ring-2 focus:ring-rosegold/30 focus:border-rosegold/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dusty-rose mb-1.5">Delivery Address *</label>
              <textarea
                name="deliveryAddress"
                value={form.deliveryAddress}
                onChange={handleChange}
                required
                rows={2}
                placeholder="Full delivery address with pincode"
                className="w-full px-4 py-3 rounded-2xl border border-blush/60 bg-blush/10 text-sm focus:outline-none focus:ring-2 focus:ring-rosegold/30 focus:border-rosegold/50 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={mutation.isPending}
              className="w-full py-4 bg-rosegold text-white rounded-full font-medium shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Placing Order...
                </>
              ) : (
                'Place Order 🎀'
              )}
            </button>
          </form>

          {/* Instagram contact note */}
          <div className="mt-6 pt-5 border-t border-blush/40 text-center">
            <p className="text-xs text-muted-foreground mb-2">Or reach us directly on Instagram</p>
            <a
              href="https://instagram.com/_the.desva_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blush/60 text-sm text-dusty-rose hover:text-rosegold hover:border-rosegold/50 transition-all"
            >
              <SiInstagram size={16} className="text-rosegold" />
              @_the.desva_
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
