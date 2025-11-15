export default function Debug() {
  return <pre>{JSON.stringify(process.env, null, 2)}</pre>;
}
