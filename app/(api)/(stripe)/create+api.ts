import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, amount } = body;

    if (!name || !email || !amount) {
        return Response.json(
            { error: "Missing required fields" },
            { status: 400 }
        );
    }
}
