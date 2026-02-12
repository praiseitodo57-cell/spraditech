'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  Course: string;
  Company: string;
}

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const FormContext = createContext<FormContextType | null>(null)

interface FormProviderProps {
  children: ReactNode;
}

export function FormProvider({ children }: FormProviderProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    Course: '',
    Company: '',
  });
  
  const [step, setStep] = useState<number>(1);

  return (
    <FormContext.Provider value={{ formData, setFormData, step, setStep }}>
      {children}
    </FormContext.Provider>
  )
}

export function useFormData() {
  const context = useContext(FormContext)
  
  if (!context) {
    throw new Error('useFormData must be used within a FormProvider')
  }
  
  return context
}