interface PageProps {
  params: {
    id: string;
  };
}

export default function UnidPage({ params }: PageProps) {
  // Validación del parámetro
  if (!params?.id) {
    return (
      <main className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">ID no especificado</h1>
          <p className="mt-4 text-gray-600">Por favor, proporciona un ID válido</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Página de ID: {params.id}</h1>
        <p className="mt-4 text-gray-600">Contenido específico para este ID</p>
        
        {/* Ejemplo de uso del ID */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold">Detalles del ID:</h2>
          <ul className="mt-2 space-y-1">
            <li>ID recibido: <span className="font-mono bg-gray-200 px-2 py-1 rounded">{params.id}</span></li>
            <li>Tipo: <span className="font-mono">{typeof params.id}</span></li>
          </ul>
        </div>
      </div>
    </main>
  );
}