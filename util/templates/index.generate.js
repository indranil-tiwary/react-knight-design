module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
    import ${componentName} from './${componentName}';

    export default ${componentName};
    `,
  extension: `.ts`,
});
