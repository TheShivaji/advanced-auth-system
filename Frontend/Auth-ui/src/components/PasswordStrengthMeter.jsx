import { Check, X } from "lucide-react";

const PasswordCriteria = ({ password }) => {
    const criteria = [
        { label: "At least 6 characters", met: password.length >= 6 },
        { label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
        { label: "Contains lowercase letter", met: /[a-z]/.test(password) },
        { label: "Contains a number", met: /\d/.test(password) },
        { label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
    ];

    return (
        <div className="mt-3 space-y-2">
            {criteria.map((item) => (
                <div key={item.label} className="flex items-center text-xs">
                    {item.met ? (
                        <Check className="size-4 text-gray-200 mr-2" />
                    ) : (
                        <X className="size-4 text-gray-500 mr-2" />
                    )}

                    <span
                        className={`${item.met ? "text-gray-200" : "text-gray-500"
                            } transition`}
                    >
                        {item.label}
                    </span>
                </div>
            ))}
        </div>
    );
};

const PasswordStrengthMeter = ({ password }) => {
    const getStrength = (pass) => {
        let strength = 0;
        if (pass.length >= 6) strength++;
        if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
        if (pass.match(/\d/)) strength++;
        if (pass.match(/[^a-zA-Z\d]/)) strength++;
        return strength;
    };

    const strength = getStrength(password);

    const getColor = (level) => {
        if (level === 0) return "bg-gray-700";
        if (level === 1) return "bg-gray-600";
        if (level === 2) return "bg-gray-500";
        if (level === 3) return "bg-gray-400";
        return "bg-gray-200";
    };

    const getStrengthText = (level) => {
        if (level === 0) return "Very Weak";
        if (level === 1) return "Weak";
        if (level === 2) return "Fair";
        if (level === 3) return "Good";
        return "Strong";
    };

    return (
        <div className="mt-3">

            {/* 🔥 top text */}
            <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-500">
                    Password strength
                </span>
                <span className="text-xs text-gray-400">
                    {getStrengthText(strength)}
                </span>
            </div>

            {/* 🔥 bars */}
            <div className="flex space-x-1">
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        className={`
              h-1.5 w-1/4 rounded-full
              transition-all duration-300
              ${index < strength ? getColor(strength) : "bg-white/10"}
            `}
                    />
                ))}
            </div>

            {/* 🔥 criteria */}
            <PasswordCriteria password={password} />
        </div>
    );
};

export default PasswordStrengthMeter;