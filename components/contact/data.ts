import zod from "zod";

// Schema
export const contactFormSchema = zod.object({
  your_name: zod.string().min(1, "Your Name is required"),
  brand_product_name: zod.string().min(1, "Brand / Product Name is required"),
  message: zod.string().min(1, "Message is required"),
});

// Types
export type contactFormSchemaType = zod.infer<typeof contactFormSchema>;
