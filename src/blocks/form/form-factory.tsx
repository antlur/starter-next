// export const fieldTypes = [
//   { label: "Short Answer", value: "text", hasOptions: false, multipleValues: false },
//   { label: "Long Answer", value: "textarea", hasOptions: false, multipleValues: false },
//   { label: "Email Field", value: "email", hasOptions: false, multipleValues: false },
//   { label: "Phone Field", value: "phone", hasOptions: false, multipleValues: false },
//   { label: "Single Choice", value: "single-choice", hasOptions: true, multipleValues: false },
//   { label: "Multiple Choice", value: "multiple-choice", hasOptions: true, multipleValues: true },
//   { label: "Dropdown", value: "dropdown", hasOptions: true, multipleValues: false },
//   { label: "Date Field", value: "date", hasOptions: false, multipleValues: false },
//   { label: "Time Field", value: "time", hasOptions: false, multipleValues: false },
//   { label: "Location Field", value: "location", hasOptions: false, multipleValues: false },
//   { label: "File Upload", value: "file", hasOptions: false, multipleValues: false },
// ];

// export const typeFromValue = (value) => {
//   const fieldType = fieldTypes.find((fieldType) => fieldType.value === value);
//   return fieldType ? fieldType : fieldTypes[0];
// };

// export const labelFromValue = (value) => {
//   const fieldType = typeFromValue(value);
//   return fieldType.label;
// };

export function FormFactory({ form }) {
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
                  {field.options.map((option, index) => (
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
                {field.options.map((option, index) => (
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
                  {field.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
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
                  {field.options.map((option, index) => (
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
