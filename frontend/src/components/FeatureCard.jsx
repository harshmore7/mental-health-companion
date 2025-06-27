const FeatureCard = ({ emoji, title, desc }) => (
  <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
    <div className="text-4xl mb-4">{emoji}</div>
    <h5 className="text-xl font-semibold text-purple-700 mb-2">{title}</h5>
    <p className="text-gray-600">{desc}</p>
  </div>
);
export default FeatureCard;