'use client'
import { useFormData } from '@/app/component/FormContext'
import { User, Mail, Calendar, Phone, MapPin, Target, ChevronRight, ChevronLeft } from 'lucide-react'
export default function Step5() {
  const { step, setStep, formData, setFormData } = useFormData()

  return (
    <div> 
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Course Selection</h3>
            <p className="text-xs sm:text-base text-gray-600">Choose your learning path</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 sm:gap-4">
            <div>
              <label htmlFor="First Name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Course *</label>
              <div className="relative">
                <input
                  placeholder="Data Analytics (6 Months)"
                  className="w-210 pl-9 sm:pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base" 
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label htmlFor="Last Name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Learning Format *</label>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3'>
                <label htmlFor="" className='relative'>
                    <input type="radio" className='sr-only' value="onlinePreRecorded" name='learningFormat'/>
                    <div className='p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-all border-gray-200 hover:border-gray-300'>
                        <div className='font-medium text-xs sm:text-sm text-gray-900'>Self-Paced</div>
                        <div className='text-xs text-gray-600 mt-1'>Pre-recorded video lessons</div>
                    </div>
                </label>

                <label htmlFor="" className='relative'>
                    <input type="radio" className='sr-only' value="onlinePreRecorded" name='learningFormat'/>
                    <div className='p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-all border-gray-200 hover:border-gray-300'>
                        <div className='font-medium text-xs sm:text-sm text-gray-900'>Live Online</div>
                        <div className='text-xs text-gray-600 mt-1'>Real-time virtual classes</div>
                    </div>
                </label>

                <label htmlFor="" className='relative'>
                    <input type="radio" className='sr-only' value="onlinePreRecorded" name='learningFormat'/>
                    <div className='p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-all border-gray-200 hover:border-gray-300'>
                        <div className='font-medium text-xs sm:text-sm text-gray-900'>In-Person(Lagos)</div>
                        <div className='text-xs text-gray-600 mt-1'>Physical classes at our campus</div>
                    </div>
                </label>

              </div>
            </div>

            <div>
              <label htmlFor="Email Address" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Preferred Schedule</label>
              <div className="relative">
                <input className="w-210 pl-9 sm:pl-3 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Select Schedule"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label htmlFor="Phone Number" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Company</label>
              <div className="relative">
                <Target className="absolute left-3 top-1/5 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400"/>
                <textarea className="w-210 h-30 pl-9 sm:pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  placeholder=" What do you hope to achieve with this course?"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

       <div className="px-3 sm:px-6 py-3 bg-gray-50  flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 flex-shrink-0 sticky bottom-0 bg-white sm:bg-gray-50">
                            <div className="flex space-x-2 w-full sm:w-auto justify-between sm:justify-start">
                                <div className="text-center flex items-center justify-center flex-1 sm:hidden">
                                    <div className="text-xs text-gray-600">
                                        1 of 4
                                    </div>
                                </div>

                                <button onClick={() => setStep(6)} className="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  shrink-0 text-primary-foreground shadow px-4 py-2 bg-blue-800 hover:bg-blue-700 flex items-center space-x-1 sm:space-x-2 flex-1 sm:flex-none min-w-[80px] sm:min-w-[100px] h-6 sm:h-10"> 
                                  <span className="text-xs sm:text-sm">Next</span>
                                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4"/>
                                </button>
                                <button onClick={() => setStep(5)} className="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  shrink-0 text-primary-foreground shadow px-4 py-2 bg-gray-200 hover:bg-gray-100 flex items-center space-x-1 sm:space-x-2 flex-1 sm:flex-none min-w-[80px] sm:min-w-[100px] h-6 sm:h-10">
                                    <span className="text-xs sm:text-sm">Previouse</span>
                                    <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4"/>
                                </button>
                            </div>
                            <div className="hidden sm:block text-center">
                                <div className="text-sm text-gray-600">Step 1 of 4</div>
                            </div>
                            <div className="hidden sm:flex space-x-2"></div>
                        
                        </div>
    </div>
  )
}