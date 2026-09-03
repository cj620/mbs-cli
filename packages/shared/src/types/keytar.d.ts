// Type stub for the optional deletion-only @keytar/node-keytar dependency.
declare module '@keytar/node-keytar' {
  /** Minimal credential adapter surface retained solely for legacy cleanup. */
  interface Keytar {
    /** Deletes a historical credential without returning or exposing its value. */
    deletePassword(service: string, account: string): Promise<boolean>
  }
  const keytar: Keytar
  export default keytar
}
