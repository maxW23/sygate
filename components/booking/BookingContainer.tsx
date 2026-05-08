'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import StepProgress from './StepProgress';
import Step1_ServiceSelect from './Step1_ServiceSelect';
import Step2_TripDetails from './Step2_TripDetails';
import Step3_PriceSummary from './Step3_PriceSummary';
import Step4_Payment from './Step4_Payment';

interface BookingData {
  service: string;
  flightNumber: string;
  arrivalDate: string;
  arrivalTime: string;
  fullName: string;
  phone: string;
  passengers: number;
  notes: string;
}

const initialData: BookingData = {
  service: 'airport',
  flightNumber: '',
  arrivalDate: '',
  arrivalTime: '',
  fullName: '',
  phone: '',
  passengers: 1,
  notes: '',
};

export default function BookingContainer() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>(initialData);

  const updateData = (field: keyof BookingData, value: string | number) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handlePaymentComplete = () => {
    router.push('/book/confirmation');
  };

  return (
    <div className="min-h-screen bg-bg-main">
      <StepProgress currentStep={currentStep} />
      
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        {currentStep === 1 && (
          <Step1_ServiceSelect
            selectedService={bookingData.service}
            onSelect={(id) => updateData('service', id)}
            onNext={nextStep}
          />
        )}
        
        {currentStep === 2 && (
          <Step2_TripDetails
            formData={bookingData}
            onChange={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )}
        
        {currentStep === 3 && (
          <Step3_PriceSummary
            selectedService={bookingData.service}
            formData={bookingData}
            onConfirm={nextStep}
            onPrev={prevStep}
          />
        )}
        
        {currentStep === 4 && (
          <Step4_Payment
            onPaymentComplete={handlePaymentComplete}
            onPrev={prevStep}
          />
        )}
      </div>
    </div>
  );
}