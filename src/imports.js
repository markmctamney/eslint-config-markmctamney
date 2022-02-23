module.exports = {
    extends: ['plugin:import/errors', 'plugin:import/warnings'],

    plugins: ['import'],

    rules: {
        /* -------------------------------------------------------------------------- */
        /*                                   Imports                                  */
        /* -------------------------------------------------------------------------- */
        // Superceded by TS parser I believe
        'import/no-unresolved': 0,

        'import/newline-after-import': 1,
        'import/no-namespace': 1,

        /** Deterministic Import Order */
        'import/order': [
            'warn',
            {
                groups: ['unknown', 'type', 'object', 'builtin', 'external', ['parent', 'sibling'], 'index'],
                pathGroups: [
                    {
                        pattern: '@nexpo/**', // TODO: unhardcode
                        group: 'external',
                        position: 'after',
                    },
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                },
                // warnOnUnassignedImports: true,
            },
        ],
    },

    overrides: [
        {
            files: ['src/**/*'],
            rules: {
                'import/no-default-export': 1,
            },
        },
    ],
};