export interface ProjectInquiryPayload {
  name: string;
  email: string;
  phone?: string;
  service: string;
  details: string;
}

export type InquiryResult =
  | { ok: true; message: string }
  | { ok: false; message: string };

/**
 * API-ready inquiry submission abstraction.
 *
 * TODO: Wire `NEXT_PUBLIC_INQUIRY_API_URL` to the production endpoint
 * (e.g. Laravel / Nest / serverless). Until then, this simulates a successful
 * client-side submission after light validation so the UX can be tested.
 */
export async function submitProjectInquiry(
  payload: ProjectInquiryPayload,
): Promise<InquiryResult> {
  const endpoint = process.env.NEXT_PUBLIC_INQUIRY_API_URL;

  if (!payload.name.trim() || !payload.email.trim() || !payload.details.trim()) {
    return { ok: false, message: "Please complete the required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return { ok: false, message: "Please enter a valid work email." };
  }

  if (endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        return {
          ok: false,
          message: "Something went wrong sending your request. Please try again.",
        };
      }

      return {
        ok: true,
        message: "Thanks — your project request has been received.",
      };
    } catch {
      return {
        ok: false,
        message: "Unable to reach the server. Please try again shortly.",
      };
    }
  }

  // Development / pre-backend fallback — do not log PII
  await new Promise((resolve) => setTimeout(resolve, 700));
  if (process.env.NODE_ENV !== "production") {
    console.info(
      "[PB IT HUB] Project inquiry received (no endpoint configured).",
    );
  }

  return {
    ok: true,
    message:
      "Thanks — your request is ready. Connect NEXT_PUBLIC_INQUIRY_API_URL to deliver it live.",
  };
}
