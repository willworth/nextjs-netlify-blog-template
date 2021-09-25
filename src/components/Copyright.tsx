export default function Copyright() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <>
      <p>&copy; {year}</p>
      <style jsx>
        {`
          p {
            font-size: 0.75rem;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
