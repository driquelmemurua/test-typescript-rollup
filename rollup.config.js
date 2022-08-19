import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import paths from './tsconfig.paths.json';
import babel from 'rollup-plugin-babel';

const packageJson = require('./package.json');

export default [
  {
    input: "src/app.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      }
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      }),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      terser(),
    ]
  },
  {
    input: "dist/esm/src/app.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts({
      compilerOptions: paths.compilerOptions
    })],
  }
]