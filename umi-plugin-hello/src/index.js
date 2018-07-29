export default function(api, opts = {}) {
    api.register('modifyHTML', ({ memo }) => {
      memo = memo.replace(
        '</head>',
        `
  <script>alert("Wow~~~ it works.")</script>
  </head>
      `.trim(),
      );
      return memo;
    });
  }
