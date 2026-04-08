import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { LogOut, User, Mail, ShieldCheck } from "lucide-react";

const Home = () => {
    const { user , logout } = useAuthStore();
    const handleLogout = () => {
		logout();
	};
    return (
        <div className="flex w-full min-h-screen text-white">

            {/* 🔥 Sidebar */}
            <div className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 hidden md:block">
                <h2 className="text-xl font-bold mb-8">🚀 Dashboard</h2>

                <div className="space-y-4 text-gray-400">
                    <p className="hover:text-white cursor-pointer">Home</p>
                    <p className="hover:text-white cursor-pointer">Profile</p>
                    <p className="hover:text-white cursor-pointer">Settings</p>
                </div>
            </div>

            {/* 🔥 Main Content */}
            <div className="flex-1 p-6 space-y-6">

                {/* 🔥 Navbar */}
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">
                        Welcome, {user?.name} 👋
                    </h1>

                    <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition" onClick={handleLogout}>
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>

                {/* 🔥 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

                    {/* Email Card */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white/10 border border-white/20 p-5 rounded-xl shadow-lg"
                    >
                        <div className="flex items-center gap-3">
                            <Mail />
                            <div>
                                <p className="text-gray-400 text-sm">Email</p>
                                <p className="font-semibold">{user?.email}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Status Card */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white/10 border border-white/20 p-5 rounded-xl shadow-lg"
                    >
                        <div className="flex items-center gap-3">
                            <ShieldCheck />
                            <div>
                                <p className="text-gray-400 text-sm">Status</p>
                                <p className="font-semibold">
                                    {user?.isVerified ? "Verified ✅" : "Pending ❌"}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* User Card */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white/10 border border-white/20 p-5 rounded-xl shadow-lg"
                    >
                        <div className="flex items-center gap-3">
                            <User />
                            <div>
                                <p className="text-gray-400 text-sm">User ID</p>
                                <p className="font-semibold text-xs">{user?._id}</p>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* 🔥 Big Profile Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl"
                >
                    <h2 className="text-xl font-semibold mb-4">Profile Overview</h2>

                    <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
                        <p><span className="text-gray-400">Name:</span> {user?.name}</p>
                        <p><span className="text-gray-400">Email:</span> {user?.email}</p>
                        <p><span className="text-gray-400">Verified:</span> {user?.isVerified ? "Yes" : "No"}</p>
                        <p><span className="text-gray-400">Last Login:</span> {new Date(user?.lastlogin).toLocaleString()}</p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Home;