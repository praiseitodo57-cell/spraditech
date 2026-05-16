
'use client'
import { useState } from 'react'
import { useFormData } from "@/app/component/FormContext"
import { CreditCard, Shield, Lock, CheckCircle, Loader2 } from "lucide-react"

export default function PaymentPage() {
  const { formData } = useFormData()
  const [paymentStep, setPaymentStep] = useState('select') // 'select', 'details', 'processing', 'success'
  const [paymentMethod, setPaymentMethod] = useState('') // 'card', 'bank', etc.
  const [loading, setLoading] = useState(false)

  // Simulated Payment Modal Component
  const PaymentModal = () => {
    if (paymentStep === 'select') return null
    
    const handlePayment = () => {
      setPaymentStep('processing')
      setTimeout(() => {
        setPaymentStep('success')
        setTimeout(() => {
          setPaymentStep('select')
          setPaymentMethod('')
        }, 3000)
      }, 2000)
    }

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-md w-full p-6 animate-in fade-in">
          
          {/* Step 1: Choose Payment Type */}
          {paymentStep === 'details' && (
            <>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5" /> Secure Payment
              </h3>
              <p className="text-sm text-gray-600 mb-6">You'll be redirected to a secure page</p>
              
              <div className="space-y-3 mb-6">
                <button 
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full p-4 border-2 rounded-lg text-left ${paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Pay with Card</div>
                      <div className="text-sm text-gray-500">Visa, Mastercard, Verve</div>
                    </div>
                  </div>
                </button>
                
                <button 
                  onClick={() => setPaymentMethod('bank')}
                  className={`w-full p-4 border-2 rounded-lg text-left ${paymentMethod === 'bank' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-8 bg-green-100 rounded flex items-center justify-center">
                      <div className="text-green-600 font-bold text-xs">🏦</div>
                    </div>
                    <div>
                      <div className="font-medium">Bank Transfer</div>
                      <div className="text-sm text-gray-500">Instant bank payment</div>
                    </div>
                  </div>
                </button>
              </div>
              
              {/* Simulated Card Form */}
              {paymentMethod === 'card' && (
                <div className="space-y-4 mb-6 animate-in slide-in-from-bottom">
                  <div>
                    <label className="block text-sm font-medium mb-1">Card Number</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border rounded-lg" 
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Expiry Date</label>
                      <input type="text" className="w-full p-3 border rounded-lg" placeholder="MM/YY" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">CVV</label>
                      <input type="text" className="w-full p-3 border rounded-lg" placeholder="123" maxLength={3} />
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex gap-3">
                <button 
                  onClick={() => setPaymentStep('select')}
                  className="flex-1 py-3 border border-gray-300 rounded-lg font-medium"
                >
                  Cancel
                </button>
                <button 
                  onClick={handlePayment}
                  disabled={!paymentMethod}
                  className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium disabled:opacity-50"
                >
                  Pay ₦540,000
                </button>
              </div>
            </>
          )}
          
          {/* Step 2: Processing Screen */}
          {paymentStep === 'processing' && (
            <div className="text-center py-8">
              <div className="relative inline-block mb-6">
                <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
              </div>
              <h3 className="text-xl font-bold mb-2">Processing Payment</h3>
              <p className="text-gray-600">Please wait while we verify your payment...</p>
              <div className="mt-4 text-sm text-gray-500">
                <div className="flex justify-center gap-6 mt-6">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-xs">Card Details</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                      <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                    </div>
                    <span className="text-xs">Verification</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-xs text-gray-400">3</span>
                    </div>
                    <span className="text-xs">Confirmation</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Step 3: Success Screen */}
          {paymentStep === 'success' && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
              <p className="text-gray-600 mb-4">Your enrollment has been confirmed</p>
              <div className="bg-gray-50 rounded-lg p-4 text-left mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-bold">₦540,000</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Reference:</span>
                  <span className="font-mono">PS-{Date.now().toString().slice(-8)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="text-green-600 font-bold">✓ Completed</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  setPaymentStep('select')
                  setPaymentMethod('')
                }}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium"
              >
                Continue to Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="px-3 sm:px-6 py-4 flex-1 overflow-y-auto">
      <div className="space-y-6 sm:space-y-8">
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Payment & Review</h3>
          <p className="text-sm sm:text-base text-gray-600">Review your information and complete payment</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Column - Enrollment Summary */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg p-4 sm:p-4 text-white">
              <h4 className="text-lg sm:text-xl font-bold mb-4">Enrollment Summary</h4>
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <span><strong>Name:</strong></span>
                  <span>{formData.firstName} {formData.lastName}</span>
                  <span><strong>Email:</strong> </span>
                  <span> {formData.email} </span> 
                  <span><strong>Phone:</strong> </span>
                  <span> {formData.phone}</span>
                  <span><strong>Address:</strong> </span>
                  <span> {formData.address}</span>
                  <span><strong>Course:</strong></span> 
                  <span> {formData.Course}</span>
                  <span><strong>Company:</strong> </span>
                  <span> {formData.Company}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-blue-400">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold">Total Amount:</span>
                  <span className="text-2xl font-bold">₦540,000</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Amount to Pay Now</span>
                    <span className="font-semibold">₦540,000</span>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <h5 className="font-semibold text-white text-sm">Payment Schedule:</h5>
                  <div className="flex justify-between text-xs">
                    <span>Payment 1 (12/22/2025):</span>
                    <span>₦540,000</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
                <select id="hearAbout" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select Option</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friend/Familly">Friend/Family</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Event/Workshop">Event/Workshop</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea id="additionalInfo" className="w-full h-30 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" placeholder="Any additional information or special requirements?"></textarea>
              </div>
            </div>
          </div>
          
          {/* Right Column - Payment Method */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method *</label>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-3">
                <label className="relative">
                  <input type="radio" className="sr-only" value="paystack" name="paymentMethod" defaultChecked />
                  <div className="p-4 border-2 rounded-lg cursor-pointer transition-all border-blue-500 bg-blue-50">
                    <div className="flex items-center space-x-2 mb-2">
                      <CreditCard className="w-5 h-5 text-gray-600"/>
                      <div className="font-medium text-gray-900">Pay Online Via Paystack</div>
                    </div>
                    <div className="text-sm text-gray-600">Secure online payment with card</div>
                  </div>
                </label>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-blue-600"/>
                <h4 className="font-medium text-blue-900">Secure Card Payment</h4>
              </div>
              <p className="text-sm text-blue-800">You'll be redirected to a secure payment page to complete your transaction. We accept Visa, Mastercard, and Verve cards.</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className='flex items-start space-x-3'>
                <input type="checkbox" id='terms' className='mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'/>
                <label htmlFor="term" className='text-sm text-gray-700'>I agree to the <a href="/Terms" className='text-blue-600 hover:underline'>Terms of Service</a> and <a href="/Privacy" className='text-blue-600 hover:underline'> Privacy Policy</a></label>
              </div>
            </div>
            
            <button 
              onClick={() => setPaymentStep('details')}
              disabled={loading}
              className="w-full mt-8 bg-green-600 text-white py-4 rounded-md text-base font-bold uppercase hover:bg-green-700 transition-colors shadow-lg disabled:opacity-70 flex justify-center items-center"
            >
              Pay Now with Paystack
            </button>
            
            <div className="mt-4 flex flex-col items-center justify-center text-xs text-gray-400 gap-2">
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                Secured by Paystack
              </span>
              <div className="flex gap-2 opacity-60">
                <span className="border px-1 rounded">VISA</span>
                <span className="border px-1 rounded">Mastercard</span>
                <span className="border px-1 rounded">Verve</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaymentModal />
    </div>
  )
}
