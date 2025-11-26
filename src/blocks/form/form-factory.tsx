/**
 * Form Factory Component
 *
 * Renders dynamic form fields based on CMS form schema.
 * Supports multiple field types: text, textarea, email, phone, choices, etc.
 */

// Form field types supported by the CMS
export interface FormField {
  type: string;
  name?: string;
  label: string;
  required?: boolean;
  options?: Array<{ label: string; value: string }>;
}

// Form schema from CMS
export interface FormSchema {
  id?: string;
  type?: string;
  fields: FormField[];
}

interface FormFactoryProps {
  form: FormSchema;
}

export function FormFactory({ form }: FormFactoryProps) {
  const schema = form.fields;

  return (
    <div className="space-y-6">
      {schema.map((field, index) => {
        switch (field.type) {
          case "text":
            return (
              <div key={index}>
                <label htmlFor={field.name} className="block font-bold">
                  {field.label}
                </label>
                <input
                  type="text"
                  id={field?.name ?? field.label}
                  name={field?.name ?? field.label}
                  className="w-full px-2 py-1 border border-gray-400 rounded"
                  required={field.required}
                />
              </div>
            );
          case "textarea":
            return (
              <div key={index}>
                <label htmlFor={field.name} className="block font-bold">
                  {field.label}
                </label>
                <textarea
                  id={field?.name ?? field.label}
                  name={field?.name ?? field.label}
                  className="w-full h-24 px-2 py-1 border border-gray-400 rounded"
                  required={field.required}
                />
              </div>
            );
          case "email":
            return (
              <div key={index}>
                <label htmlFor={field.name} className="block font-bold">
                  {field.label}
                </label>
                <input
                  type="email"
                  id={field?.name ?? field.label}
                  name={field?.name ?? field.label}
                  className="w-full px-2 py-1 border border-gray-400 rounded"
                  required={field.required}
                />
              </div>
            );
          case "phone":
            return (
              <div key={index}>
                <label htmlFor={field.name} className="block font-bold">
                  {field.label}
                </label>
                <input
                  type="tel"
                  id={field?.name ?? field.label}
                  name={field?.name ?? field.label}
                  className="w-full px-2 py-1 border border-gray-400 rounded"
                  required={field.required}
                />
              </div>
            );
          case "single-choice":
            return (
              <div key={index}>
                <label htmlFor={field.name} className="block font-bold">
                  {field.label}
                </label>
                <select
                  id={field?.name ?? field.label}
                  name={field?.name ?? field.label}
                  className="w-full px-2 py-1 border border-gray-400 rounded"
                  required={field.required}
                >
                  {field.options?.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            );
          case "multiple-choice":
            return (
              <div key={index}>
                <label htmlFor={field.name} className="block font-bold">
                  {field.label}
                </label>
                {field.options?.map((option, index) => (
                  <div key={index}>
                    <input type="checkbox" id={field.name} name={field.name} value={option.value} />
                    <label htmlFor={field.name}>{option.label}</label>
                  </div>
                ))}
              </div>
            );
          case "dropdown":
            return (
              <div key={index}>
                <label htmlFor={field.name} className="block font-bold">
                  {field.label}
                </label>
                <select
                  id={field?.name ?? field.label}
                  name={field?.name ?? field.label}
                  className="w-full px-2 py-1 border border-gray-400 rounded"
                  required={field.required}
                >
                  <option value="">Select an option</option>
                  {field.options?.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            );
          case "date":
            return (
              <div key={index}>
                <label htmlFor={field.name} className="block font-bold">
                  {field.label}
                </label>
                <input
                  type="date"
                  id={field?.name ?? field.label}
                  name={field?.name ?? field.label}
                  className="w-full px-2 py-1 border border-gray-400 rounded"
                  required={field.required}
                />
              </div>
            );
          case "time":
            return (
              <div key={index}>
                <label htmlFor={field.name} className="block font-bold">
                  {field.label}
                </label>
                <input
                  type="time"
                  id={field?.name ?? field.label}
                  name={field?.name ?? field.label}
                  className="w-full px-2 py-1 border border-gray-400 rounded"
                  required={field.required}
                />
              </div>
            );
          case "location":
            return (
              <div key={index}>
                <label htmlFor={field.name} className="block font-bold">
                  {field.label}
                </label>
                <select
                  id={field?.name ?? field.label}
                  name={field?.name ?? field.label}
                  className="w-full px-2 py-1 border border-gray-400 rounded"
                  required={field.required}
                >
                  {field.options?.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            );
          case "file":
            return (
              <div key={index}>
                <label htmlFor={field.name} className="block font-bold">
                  {field.label}
                </label>
                <input
                  type="file"
                  id={field?.name ?? field.label}
                  name={field?.name ?? field.label}
                  className="w-full px-2 py-1 border border-gray-400 rounded"
                  required={field.required}
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
