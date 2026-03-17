function TechCard({ name, svg }: { name: string, svg: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 px-4 py-3 rounded-xl border border-gray-800 bg-[#121212] hover:bg-[#1f1f1f] hover:border-gray-500 hover:-translate-y-1 transition-all duration-300 w-full cursor-default group">
      <div className="w-12 h-12 rounded-lg bg-[#202020] border border-gray-700 shadow-sm shrink-0 flex items-center justify-center text-white group-hover:bg-[#2a2a2a] transition-colors duration-300">
        {svg}
      </div>
      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{name}</span>
    </div>
  );
}

export default TechCard