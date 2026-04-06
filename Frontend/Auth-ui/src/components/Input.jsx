const Input = ({ icon: Icon, ...props }) => {
    return (
        <div className="relative mb-6">

            {/* 🔥 Icon */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icon className="size-5 text-gray-400" />
            </div>

            {/* 🔥 Input */}
            <input
                {...props}
                className="
          w-full pl-10 pr-3 py-3
          bg-white/5 
          backdrop-blur-lg
          rounded-xl 
          border border-white/10
          text-white 
          placeholder-gray-500
          
          focus:outline-none 
          focus:ring-2 focus:ring-gray-400
          focus:border-gray-400
          
          transition-all duration-200
        "
            />
        </div>
    );
};

export default Input;