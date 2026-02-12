
'use client'
import { useFormData } from '@/app/component/FormContext'
import { User, Mail, Calendar, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Step1() {
  const { step, setStep, formData, setFormData } = useFormData()
  const [showForm, setShowForm] = useState(false)
  
  return (
    <div>
      {showForm && (
        <div></div>
      )}
    </div>
  )
}