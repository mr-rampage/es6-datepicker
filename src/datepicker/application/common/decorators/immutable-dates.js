/* eslint no-param-reassign: 0 */

export function immutableDates(...dateFields) {
  const privateStorage = {};

  return function makeDateFieldsImmutable(target) {
    dateFields.forEach(field => {
      Object.defineProperty(privateStorage, field, {
        configurable: false,
        enumerable: false,
        writable: true,
      });

      Object.defineProperty(target.prototype, field, {
        get: function getter() {
          return privateStorage[field] ? new Date(privateStorage[field].getTime()) : null;
        },
        set: function setter(date) {
          privateStorage[field] = date ? new Date(date.getTime()) : null;
        },
      });
    });
  };
}
