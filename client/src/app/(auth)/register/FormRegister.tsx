"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RegisterSchema } from "@/lib/schema/register.schema"
import { RegisterFormType } from "@/lib/types/form.type"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export default function FormRegister() {
  const form = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      phone: ""
    }
  })
  return (
    <>
      <Form {...form} >
        <form className="space-y-12">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Số điện thoại</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Nhập số điện thoại của bạn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full mt-auto"
          >
            Tiếp tục
          </Button>
        </form>
      </Form>
    </>
  )
}
