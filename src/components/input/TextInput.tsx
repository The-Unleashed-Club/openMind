import { FC } from "react";
import {
  Text,
  TextInput as PaperTextInput,
  TextInputProps,
} from "react-native-paper";
import { Controller, ControllerProps, FieldValues } from "react-hook-form";

// TODO: Fix this typing issue
// https://github.com/react-hook-form/react-hook-form/issues/4965
type Props<T extends FieldValues> = Partial<ControllerProps<T>>;

export const TextInput: FC<TextInputProps & Props<any>> = (props) => {
  const { control, rules, name, ...rest } = props;

  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
          return <>
            <PaperTextInput
              mode="flat"
              style={{
                backgroundColor: "white",
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={error && true}
              {...rest}
            />
            {error && (
              <Text variant="labelSmall" style={{ color: "red" }}>
                {error.message}
              </Text>
            )}
          </>
        }}
        name={name}
      />
    </>
  );
};
