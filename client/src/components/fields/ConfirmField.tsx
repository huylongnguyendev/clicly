import { useFormContext } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useState } from "react"
import { Eye, EyeClosed } from "lucide-react"

export default function ConfirmField() {
  const { control } = useFormContext()
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <>
      <FormField
        control={control}
        name="confirm"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Xác nhận mật khẩu</FormLabel>
            <div className="relative">
              <FormControl>
                <Input
                  type={isShow ? "text" : "password"}
                  placeholder="Xác nhận mật khẩu vừa tạo" {...field}
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
