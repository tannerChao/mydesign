const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const dts = require('rollup-plugin-dts').default;
const { terser } = require('rollup-plugin-terser');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

const packageJson = require('./package.json');

const onwarn = (warning, warn) => {
  // 忽略 'use client' 指令的警告
  if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('use client')) {
    return;
  }
  warn(warning);
};

const createConfig = (input, output) => ({
  input,
  output,
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    terser(),
  ],
  onwarn,
  external: Object.keys(packageJson.peerDependencies || {}).concat(
    Object.keys(packageJson.dependencies || {})
  ),
});

module.exports = [
  // Main bundle
  createConfig('src/index.ts', [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ]),
  // Utils bundle
  createConfig('src/utils/index.ts', [
    {
      file: 'dist/cjs/utils/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/esm/utils/index.js',
      format: 'esm',
      sourcemap: true,
    },
  ]),
  // Hooks bundle
  createConfig('src/hooks/index.ts', [
    {
      file: 'dist/cjs/hooks/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/esm/hooks/index.js',
      format: 'esm',
      sourcemap: true,
    },
  ]),
  // Main types bundle
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/types',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    plugins: [dts()],
    external: [
      /\.css$/,
      'react',
      'react-dom',
      '@mui/material',
      '@emotion/react',
      '@emotion/styled',
      /^@components\//,
      /^@utils\//,
      /^@hooks\//
    ],
  },
  // Utils types bundle
  {
    input: 'src/utils/index.ts',
    output: {
      dir: 'dist/types/utils',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src/utils',
    },
    plugins: [dts()],
    external: [
      'react',
      'react-dom',
      '@mui/material',
      '@emotion/react',
      '@emotion/styled'
    ],
  },
  // Hooks types bundle
  {
    input: 'src/hooks/index.ts',
    output: {
      dir: 'dist/types/hooks',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src/hooks',
    },
    plugins: [dts()],
    external: [
      'react',
      'react-dom',
      '@mui/material',
      '@emotion/react',
      '@emotion/styled'
    ],
  }
];
