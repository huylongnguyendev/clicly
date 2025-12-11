import { useFormContext } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Eye, EyeClosed } from "lucide-react"
import { useState } from "react"

export default function PasswordField({
  placeholder
}: {
  placeholder?: string
}) {
  const { control } = useFormContext()
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <>
      <FormField
        control={control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Mật khẩu</FormLabel>
            <div className="relative">
              <FormControl>
                <Input
                  type={isShow ? "text" : "password"}
                  placeholder={placeholder} {...field}
                />
              </FormControl>
              <Button
                variant="ghost"
                size="icon"
                type="button"
                className="absolute right-0"
                onClick={() => setIsShow(!isShow)}
              >
                {isShow && <Eye /> || <EyeClosed />}
              </Button>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
