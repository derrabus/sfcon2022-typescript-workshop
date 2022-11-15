/**
 * Cheat sheet: enums
 */

enum ShirtSizes {
    ExtraSmall,
    Small,
    Medium,
    Large,
    ExtraLarge,
}

// An enum compiles to an object.
console.log(typeof ShirtSizes);
console.log(ShirtSizes);

// By default, enums are numeric values.
console.log(ShirtSizes.Small);
// Numeric enums provide a reverse mapping
// that let us lookup the name of a value.
console.log(ShirtSizes[ShirtSizes.Small]);

// We can assign string values to enum cases
enum BackedShirtSizes {
    ExtraSmall = 'XS',
    Small = 'S',
    Medium = 'M',
    Large = 'L',
    ExtraLarge = 'XL',
}

// … but we lose the reverse mapping.
console.log(BackedShirtSizes);
console.log(BackedShirtSizes.Small);

export {}
