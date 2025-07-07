// app/contactos/page.js
export default function ContactosPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contáctanos</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Información de contacto</h2>
          <p className="text-gray-600 mb-4">Correo: contacto@tudominio.com</p>
          <p className="text-gray-600 mb-4">Teléfono: +1 234 567 890</p>
          <p className="text-gray-600">Dirección: Calle Ejemplo #123, Ciudad</p>
        </div>
      </div>
    </main>
  );
}