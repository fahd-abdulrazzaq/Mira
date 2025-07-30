import MiraPlayground from "../components/MiraPlayground";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Mira SDK Playground</h1>
        <p className="text-gray-600 text-center mb-6">Try out the Mira SDK live in your browser using the embedded sandbox below.</p>
        <MiraPlayground />
      </div>
    </div>
  );
}
