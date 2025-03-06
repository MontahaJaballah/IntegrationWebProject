import React from "react";
import truck from '../assets/images/truck.png'
import house from '../assets/images/house.png'
import card from '../assets/images/card.png'

const FeatureItem = ({ icon, altText, title, description }) => {
    return (
        <article className="flex flex-1 gap-3 items-start max-md:w-full max-sm:flex-col max-sm:items-center max-sm:text-center">
            <img
                src={icon}
                className="object-contain w-auto h-[55px]"
                alt={altText}
            />
            <div className="flex flex-col gap-4 max-sm:items-center">
                <h3 className="text-xl font-extrabold text-black max-sm:text-lg">
                    {title}
                </h3>
                <p className="text-lg font-extrabold leading-tight text-black text-opacity-50 max-sm:text-base">
                    {description}
                </p>
            </div>
        </article>
    );
};

const FeaturesContainer = () => {
    const features = [
        {
            icon: truck,
            altText: "Fast delivery icon",
            title: "Fast delivery",
            description: "We prepare and ship your package the day after your order.",
        },
        {
            icon: house,
            altText: "Store pickup icon",
            title: "In-Store pickup",
            description:
                "Prefer to collect your order? Choose free same-day pickup at our store located in Ariena.",
        },
        {
            icon: card,
            altText: "Secure payment icon",
            title: "Secure Payment",
            description:
                'Payments are processed through Monetique Tunisie\'s "Clictopay" platform. We do not store any banking information.',
        },
    ];

    return (
        <section className="flex gap-5 justify-between p-10 mx-auto my-10 bg-white max-w-[1128px] max-md:flex-col max-md:p-8 max-sm:p-5">
            {features.map((feature, index) => (
                <FeatureItem
                    key={index}
                    icon={feature.icon}
                    altText={feature.altText}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </section>
    );
};

export default FeaturesContainer;
