'use client'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import SubmitButton from '@/components/Button/SubmitButton'
import SlideIn from '@/hooks/SlideIn'

type Inputs = {
    name: string
    email: string
    phone: string
    comments?: string
}

const EmailForm = ({ emailTitle = "", emailDescription = [], emailUrgency, emailUrgencyText = ""}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        mode: 'onBlur' // Validate on blur for better user experience
    })

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const result = await response.json()
            alert("Form submitted!")
            reset()
        } catch (error) {
            console.error('Error sending email:', error)
        }
    }

    return (
        <section className='my-20 x-margin flex flex-col md:flex-row justify-around items-center flex-1 gap-4 md:gap-0'>
            <div className="md:w-[50%] flex flex-col text-center md:text-left items-center md:items-start gap-8">
                <SlideIn delay={0}>
                    <h2 className="text-4xl font-semibold md:pr-[20%]">{emailTitle}</h2>
                </SlideIn>
                <SlideIn delay={100} classes='flex flex-col gap-4'>
                {emailDescription.map((text, index) => (
                    <p
                        className="text-lg"
                        key={index}
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                ))}
                <p className="text-lg">
                    {emailUrgency}
                    {emailUrgencyText}
                </p>
                </SlideIn>
            </div>
            <div className='md:w-[50%] flex flex-col'>
                <SlideIn delay={200}>
                    <div className='w-full md:p-12'>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                            id={"contact-form"}
                        >
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.name ? 'border-red-500' : ''
                                    }`}
                                    id="name"
                                    {...register("name", {
                                        required: "Name is required",
                                        minLength: {
                                            value: 2,
                                            message: "Name must be at least 2 characters"
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: "Name cannot exceed 50 characters"
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z\s-']+$/,
                                            message: "Name can only contain letters, spaces, hyphens, and apostrophes"
                                        }
                                    })}
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-xs italic">
                                        {errors.name.message}
                                    </span>
                                )}
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.email ? 'border-red-500' : ''
                                    }`}
                                    id="email"
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    placeholder="john.doe@example.com"
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-xs italic">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="phone"
                                >
                                    Phone
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.phone ? 'border-red-500' : ''
                                    }`}
                                    id="phone"
                                    type="tel"
                                    {...register("phone", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                                            message: "Invalid phone number format"
                                        }
                                    })}
                                    placeholder="731-695-3443"
                                />
                                {errors.phone && (
                                    <span className="text-red-500 text-xs italic">
                                        {errors.phone.message}
                                    </span>
                                )}
                            </div>
                            <div className="mb-6">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="comments"
                                >
                                    Comments
                                </label>
                                <textarea
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.comments ? 'border-red-500' : ''
                                    }`}
                                    id="comments"
                                    {...register("comments", {
                                        maxLength: {
                                            value: 500,
                                            message: "Comments cannot exceed 500 characters"
                                        }
                                    })}
                                    placeholder="Comments"
                                />
                                {errors.comments && (
                                    <span className="text-red-500 text-xs italic">
                                        {errors.comments.message}
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <SubmitButton text="Submit" flipColor={true}/>
                            </div>
                        </form>
                    </div>
                </SlideIn>
            </div>
        </section>
    )
}

export default EmailForm