import Header from "./components/Header";
import Footer from "./components/Footer";

export default function LandingPage() {
    return (

        <div>
            <Header />
            <div className="min-h-screen bg-gray-100 text-gray-900">


                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center text-center py-20 px-6">
                    <h1 className="text-4xl font-bold mb-4">Empower Your Learning Journey</h1>
                    <p className="text-lg text-gray-700 max-w-2xl">
                        Unlock your potential with high-quality courses, expert instructors, and an interactive learning experience.
                    </p>
                    <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
                        Get Started
                    </button>
                </section>

                {/* Features Section */}
                <section className="bg-white py-16 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Why Choose SharpEdg?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-4 border rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                                <p className="text-gray-600">Learn from industry leaders with real-world experience.</p>
                            </div>
                            <div className="p-4 border rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
                                <p className="text-gray-600">Engage with quizzes, assignments, and live sessions.</p>
                            </div>
                            <div className="p-4 border rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Flexible Courses</h3>
                                <p className="text-gray-600">Learn at your own pace, anytime, anywhere.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="  text-center py-12 px-6">
                    <h2 className="text-3xl font-bold mb-4">Start Learning Today!</h2>
                    <p className="text-lg max-w-xl mx-auto">
                        Join thousands of students on their journey to success.
                    </p>
                    <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-200 transition">
                        Explore Courses
                    </button>
                </section>


            </div>
            <Footer />
        </div>
    );
}