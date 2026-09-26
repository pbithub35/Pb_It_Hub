import type {
  StudentLeadPayload,
  StudentLeadResult,
} from "@/types/student-lead";
import { LEAD_TYPES } from "@/types/student-lead";

function isValidLeadType(value: string): value is StudentLeadPayload["leadType"] {
  return (LEAD_TYPES as readonly string[]).includes(value);
}

/**
 * API-ready student lead submission.
 * Never returns a permanent public ZIP from the client.
 */
export async function submitStudentLead(
  payload: StudentLeadPayload,
): Promise<StudentLeadResult> {
  const endpoint =
    process.env.NEXT_PUBLIC_STUDENT_LEAD_API_URL ||
    process.env.NEXT_PUBLIC_INQUIRY_API_URL;

  if (!payload.name.trim() || !payload.email.trim() || !payload.phone.trim()) {
    return { ok: false, message: "Please complete name, email and phone." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return { ok: false, message: "Please enter a valid email." };
  }

  if (!isValidLeadType(payload.leadType)) {
    return { ok: false, message: "Invalid lead type." };
  }

  const body: StudentLeadPayload = {
    ...payload,
    createdAt: new Date().toISOString(),
  };

  if (endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        return {
          ok: false,
          message: "Something went wrong. Please try again.",
        };
      }

      const data = (await response.json().catch(() => ({}))) as {
        message?: string;
        downloadUrl?: string;
      };

      return {
        ok: true,
        message: data.message ?? "Thanks — your request has been received.",
        downloadUrl: data.downloadUrl,
      };
    } catch {
      return {
        ok: false,
        message: "Unable to reach the server. Please try again shortly.",
      };
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 650));
  console.info("[PB_IT_HUB] Student lead (no endpoint configured):", body);

  return {
    ok: true,
    message:
      "Thanks — your request is ready. Connect NEXT_PUBLIC_STUDENT_LEAD_API_URL to deliver it live.",
  };
}
