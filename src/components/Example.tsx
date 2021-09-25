export default function Example() {
  return (
    <div>
      <a>
        <h2>example component</h2>
        <style jsx>
          {`
            body {
              color: wheat;
            }
            a {
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </a>
    </div>
  );
}
