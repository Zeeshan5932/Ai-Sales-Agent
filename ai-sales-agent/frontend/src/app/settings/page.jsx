export default function Settings() {
  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

      <div className="grid gap-8 max-w-2xl">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">API Configuration</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Backend URL
              </label>
              <input
                type="text"
                value={process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
              />
              <p className="text-xs text-gray-500 mt-2">
                Configured in .env.local file
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Application</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Version</p>
              <p className="text-sm font-semibold text-gray-900">1.0.0</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Environment</p>
              <p className="text-sm font-semibold text-gray-900">Production</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
