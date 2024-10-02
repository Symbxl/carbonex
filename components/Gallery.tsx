const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1618323218885-7a2edf3a96c2?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src="https://carbonexcontractors.com/wp-content/uploads/2022/09/sandblasting-coatings-spraying-safety-gear-helmet.jpg" alt="" />
      </div>
    </div>
  );
}

export default Gallery;