import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

export function dateGreater(startDateProperty: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'dateGreater',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const object = args.object as any;
                    const startDate = object[startDateProperty];
                    if (!startDate || !value) return true;
                    return new Date(value) > new Date(startDate);
                },
                defaultMessage(args: ValidationArguments) {
                    return `${propertyName} must be greater than ${startDateProperty}`;
                },
            },
        });
    };
}
