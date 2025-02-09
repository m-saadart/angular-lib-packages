import { Component } from '@angular/core';

@Component({
  selector: 'lib-shared',
  standalone: true,
  imports: [],
  template: `
    <p>
      shared works!
    </p>
  `,
  styles: ``
})
export class SharedComponent {

}


// name: Publish Angular Library to GitHub Packages

// on:
//   push:
//     branches:
//       - main
//       - "v*.*.*"

// jobs:
//   build:
//     runs-on: ubuntu-latest
//     permissions:
//       contents: read
//       packages: write
//     steps:
//       - uses: actions/checkout@v4
//       - uses: actions/setup-node@v3
//         with:
//           node-version: '20.x'
//           registry-url: 'https://npm.pkg.github.com'
//           scope: '@msaadart'
//         env:
//           NODE_AUTH_TOKEN: ${{ secrets.TOKEN_ACCESS }}
//       # - run: |
//       #     curl -H "Authorization: Bearer $NODE_AUTH_TOKEN" \
//       #     -H "Accept: application/vnd.github.v3+json" \
//       #     https://api.github.com/repos/${{ github.repository }}
//       - run: npm install
//       - run: npm run build shared
//       - run: |
//           cd dist/shared
//           npm publish --access public
