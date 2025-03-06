"use client"
import React from "react"
import { useState } from "react"


const YourCaloryProfile = () => {
    const [gender, setGender] = useState("")
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [age, setAge] = useState("")
    const [result, setResult] = useState("")

    const handleCalculate = () => {
        // Here you would implement the actual calorie calculation logic
        // This is a placeholder - replace with your actual calculation formula
        setResult("2000 calories/day")
    }

    return (
        <div className="bg-custom-yellow-2 flex flex-col w-full mx-auto">
            {/* Header section */}
            <div className="bg-custom-yellow-2 p-6 rounded-competition">
                <h1 className="text-2xl font-bold text-red-800">Your profile</h1>
            </div>

            {/* Form section */}
            <div className="bg-gray-100 p-6 border border-custom-brown rounded-competition shadow-md mx-4 -mt-2">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <label className="text-red-800 font-bold">Gender</label>
                        <div className="relative w-56">
                            <select
                                className="w-full p-2 bg-white border rounded-competition appearance-none pr-8"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="" disabled hidden>
                                    Select gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="text-red-800 font-bold">Weight</label>
                        <div className="relative w-56">
                            <select
                                className="w-full p-2 bg-white border rounded-competition appearance-none pr-8"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            >
                                <option value="" disabled hidden>
                                    Select weight (kg)
                                </option>
                                {Array.from({ length: 150 }, (_, i) => i + 30).map((num) => (
                                    <option key={num} value={num}>
                                        {num} kg
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="text-red-800 font-bold">Height</label>
                        <div className="relative w-56">
                            <select
                                className="w-full p-2 bg-white border rounded-competition appearance-none pr-8"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            >
                                <option value="" disabled hidden>
                                    Select height (cm)
                                </option>
                                {Array.from({ length: 120 }, (_, i) => i + 120).map((num) => (
                                    <option key={num} value={num}>
                                        {num} cm
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="text-red-800 font-bold">Age</label>
                        <div className="relative w-56">
                            <select
                                className="w-full p-2 bg-white border rounded-competition appearance-none pr-8"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            >
                                <option value="" disabled hidden>
                                    Select age
                                </option>
                                {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                                    <option key={num} value={num}>
                                        {num}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button onClick={handleCalculate} className="bg-custom-brown hover:bg-red-800 text-white px-4 py-2 rounded-competition">
                            Calculate
                        </button>
                    </div>
                </div>
            </div>

            {/* Results section */}
            <div className="bg-custom-brown p-6 rounded-competition text-amber-100 mt-4">
                <h2 className="text-2xl font-bold mb-4">Your result !</h2>
                <div className="bg-white text-center p-3 rounded-competition text-gray-700">
                    {result || "Complete your profile and click calculate"}
                </div>
            </div>
        </div>
    )
}

export default YourCaloryProfile

