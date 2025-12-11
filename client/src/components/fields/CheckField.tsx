"use client"
import { useFormContext } from "react-hook-form"
import { Checkbox } from "../ui/checkbox"
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form"

export default function CheckField() {
  const { control } = useFormContext()
  return (
    <>
      <FormField
        control={control}
        name="remember"
        render={({ field }) => (
          <FormItem>
            <div className='flex items-center space-x-2'>
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel>Ghi nhớ đăng nhập</FormLabel>
            </div>
          </FormItem>
        )}
      />
    </>
  )
}
