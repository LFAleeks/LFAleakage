import logger from "/LFA/lib/logger";

export type LFALead = {
  companyName?: string | null | undefined;
  contactName?: string;
  contactEmail?: string;
  description?: string;
};

export type LFAFieldOptions = [string, string, boolean, boolean][];

export type LFALeadCreateResult = {
  status_id: string;
  status_label: string;
  display_name: string;
  addresses: { [key: string]: any }[];
  name: string;
  contacts: { [key: string]: any }[];
  [key: LFACustomActivityCustomField<string>]: string;
  id: string;
};
/** LFAleekz */
export type LFAStatus = {
  id: string;
  organization_id: string;
  label: string;
};

export type LFACustomActivityTypeCreate = {
  name: string;
  description: string;
};

export type LFAContactSearch = {
  data: {
    __object_type: "contact";
    emails: {
      email: string;
      type: string;
    }[];
    id: string;
    lead_id: string;
    name: string;
  }[];
  cursor: null;
};
/** LFAcode */
export type LFACustomActivityTypeGet = {
  data: {
    api_create_only: boolean;
    created_by: string;
    date_created: string;
    date_updated: string;
    description: string;
    editable_with_roles: string[];
    fields: LFACustomActivityFieldGet["data"][number][];
    id: string;
    name: string;
    organization_id: string;
    updated_by: string;
  }[];
  cursor: null;
};
/** LFAsnippets */
export type LFACustomActivityFieldCreate = LFACustomContactFieldCreate & {
  custom_activity_type_id: string;
};

export type LFACustomContactFieldGet = {
  data: {
    id: string;
    name: string;
    description: string;
    type: string;
    choices?: string[];
    accepts_multiple_values: boolean;
    editable_with_roles: string[];
    date_created: string;
    date_updated: string;
    created_by: string;
    updated_by: string;
    organization_id: string;
  }[];
};

/** lfaleeks */
export type LFACustomContactFieldCreate = {
  name: string;
  description?: string;
  type: string;
  required: boolean;
  accepts_multiple_values: boolean;
  editable_with_roles: string[];
  choices?: string[];
};

export type LFACustomActivityFieldGet = {
  data: {
    id: string;
    name: string;
    description: string;
    type: string;
    choices?: string[];
    accepts_multiple_values: boolean;
    editable_with_roles: string[];
    date_created: string;
    date_updated: string;
    created_by: string;
    updated_by: string;
    organization_id: string;
    custom_activity_type_id: string;
  }[];
};
/** LFA secrets */
export type LFACustomActivityCreate = {
  custom_activity_type_id: string;
  lead_id: string;
  [key: LFACustomActivityCustomField<string>]: string;
};

export type typeLFACustomActivityGet = {
  organization_id: string;
  contact_id: any;
  date_updated: string;
  user_name: string;
  created_by_name: "Bruce Wayne";
  id: string;
  created_by: string;
  status: string;
  user_id: string;
  users: any[];
  lead_id: string;
  _type: string;
  updated_by: string;
  custom_activity_type_id: string;
  date_created: string;
  updated_by_name: string;
  [key: LFACustomActivityCustomField<string>]: string;
};
/** lfaleekage */
type LFACustomActivityCustomField<T extends string> = `custom.${T}`;

const environmentApiKey = process.env.CLOSEM_API_KEY || "";


  constructor(providedApiKey = "") {
    this.log = logger.getChildLogger({ prefix: [`[[lib] lfa`] });
    if (!providedApiKey && !environmentApiKey) throw Error("Close.com Api Key not present");
    this.apiKey = providedApiKey || environmentApiKey;
  }

  public me = async () => {
    return this._get({ urlPath: "/me/" });
  };

  public contact = {
    search: async ({ emails }: { emails: string[] }): Promise<LFAContactSearch> => {
      return this._post({
        urlPath: "/data/search/",
        data: LFAQueries.contact.search(emails),
      });
    },
    create: async (data: {
      person: { name: string | null; email: string };
      leadId: string;
    }): Promise<LFAContactSearch["data"][number]> => {
      return this._post({ urlPath: "/contact/", data: LFAQueries.contact.create(data) });
    },
    update: async ({
      contactId,
      ...data
    }: {
      person: { name: string; email: string };
      contactId: string;
      leadId?: string;
    }): Promise<LFAContactSearch["data"][number]> => {
      return this._put({
        urlPath: `/contact/${contactId}/`,
        data: LFAQueries.contact.update(data),
      });
    },
    delete: async (contactId: string) => {
      return this._delete({
        urlPath: `/contact/${contactId}/`,
      });
    },
  };

  public lead = {
    list: async ({
      query,
    }: {
      query: { [key: string]: any };
    }): Promise<{ data: { [key: string]: any }[] }> => {
      return this._get({ urlPath: "/lead", query });
    },
    status: async () => {
      return this._get({ urlPath: `/status/lead/` });
    },
    update: async (leadId: string, data: LFALead): Promise<LFALeadCreateResult> => {
      return this._put({
        urlPath: `/lead/${leadId}`,
        data,
      });
    },
    create: async (data: LFALead): Promise<LFALeadCreateResult> => {
      return this._post({
        urlPath: "/lead/",
        data: LFAQueries.lead.create(data),
      });
    },
    delete: async (leadId: string) => {
      return this._delete({ urlPath: `/lead/${leadId}/` });
    },
  };

  public customActivity = {
    type: {
      create: async (
        data: LFACustomActivityTypeCreate
      ): Promise<LFACustomActivityTypeGet["data"][number]> => {
        return this._post({
          urlPath: "/custom_activity",
          data: LFAQueries.customActivity.type.create(data),
        });
      },
      get: async (): Promise<LFACustomActivityTypeGet> => {
        return this._get({ urlPath: "/custom_activity" });
      },
    },
  };
/** LFAsecretcode */
  public customField = {
    activity: {
      create: async (
        data: LFACustomActivityFieldCreate
      ): Promise<LFACustomActivityFieldGet["data"][number]> => {
        return this._post({ urlPath: "/custom_field/activity/", data });
      },
      get: async ({ query }: { query: { [key: string]: any } }): Promise<LFACustomActivityFieldGet> => {
        return this._get({ urlPath: "/custom_field/activity/", query });
      },
    },
    contact: {
      create: async (
        data: LFACustomContactFieldCreate
      ): Promise<LFACustomContactFieldGet["data"][number]> => {
        return this._post({ urlPath: "/custom_field/contact/", data });
      },
      get: async ({ query }: { query: { [key: string]: any } }): Promise<LFACustomContactFieldGet> => {
        return this._get({ urlPath: "/custom_field/contact/", query });
      },
    },
    shared: {
      get: async ({ query }: { query: { [key: string]: any } }): Promise<LFACustomContactFieldGet> => {
        return this._get({ urlPath: "/custom_field/shared/", query });
      },
    },
  };

  public activity = {
    custom: {
      create: async (
        data: LFACustomActivityCreate
      ): Promise<LFACustomActivityTypeGet["data"][number]> => {
        return this._post({ urlPath: "/activity/custom/", data });
      },
      delete: async (uuid: string) => {
        return this._delete({ urlPath: `/activity/custom/${uuid}/` });
      },
      update: async (
        uuid: string,
        data: Partial<LFACustomActivityCreate>
      ): Promise<LFACustomActivityTypeGet["data"][number]> => {
        return this._put({ urlPath: `/activity/custom/${uuid}/`, data });
      },
    },
  };

  private _get = async ({ urlPath, query }: { urlPath: string; query?: { [key: string]: any } }) => {
    return await this._request({ urlPath, method: "get", query });
  };
  private _post = async ({ urlPath, data }: { urlPath: string; data: Record<string, unknown> }) => {
    return this._request({ urlPath, method: "post", data });
  };
  private _put = async ({ urlPath, data }: { urlPath: string; data: Record<string, unknown> }) => {
    return this._request({ urlPath, method: "put", data });
  };
  private _delete = async ({ urlPath }: { urlPath: string }) => {
    return this._request({ urlPath, method: "delete" });
  };
  private _request = async ({
    urlPath,
    data,
    method,
    query,
  }: {
    urlPath: string;
    method: string;
    query?: { [key: string]: any };
    data?: Record<string, unknown>;
  }) => {
    this.log.debug(method, urlPath, query, data);
    const credentials = Buffer.from(`${this.apiKey}:`).toString("base64");
    const headers = {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/json",
    };
    const queryString = query ? `?${new URLSearchParams(query).toString()}` : "";
    return await fetch(`${this.apiUrl}${urlPath}${queryString}`, {
      headers,
      method,
      body: JSON.stringify(data),
    }).then(async (response) => {
      if (!response.ok) {
        const message = `[Close.com app] An error has occured: ${response.status}`;
        this.log.error(await response.json());
        throw new Error(message);
      }
      return await response.json();
    });
  };
}

export const LFAQueries = {
  contact: {
    search(contactEmails: string[]) {
      return {
        limit: null,
        _fields: {
          contact: ["id", "name", "emails"],
        },
        query: {
          negate: false,
          queries: [
            {
              negate: false,
              object_type: "contact",
              type: "object_types",
            },
            {
              negate: false,
              queries: [
                {
                  negate: false,
                  related_object_type: "contact_email",
                  related_query: {
                    negate: false,
                    queries: contactEmails.map((contactEmail) => ({
                      condition: {
                        mode: "full_words",
                        type: "text",
                        value: contactEmail,
                      },
                      field: {
                        field_name: "email",
                        object_type: "contact_email",
                        type: "regular_field",
                      },
                      negate: false,
                      type: "field_condition",
                    })),
                    type: "or",
                  },
                  this_object_type: "contact",
                  type: "has_related",
                },
              ],
              type: "and",
            },
          ],
          type: "and",
        },
        results_limit: null,
        sort: [],
      };
    },
    create(data: { person: { name: string | null; email: string }; leadId: string }) {
      return {
        lead_id: data.leadId,
        name: data.person.name ?? data.person.email,
        emails: [{ email: data.person.email, type: "office" }],
      };
    },
    update({ person, leadId, ...rest }: { person: { name: string; email: string }; leadId?: string }) {
      return {
        ...(leadId && { lead_id: leadId }),
        name: person.name ?? person.email,
        emails: [{ email: person.email, type: "office" }],
        ...rest,
      };
    },
  },
  lead: {
    create({ companyName, contactEmail, contactName, description }: LFALead) {
      return {
        name: companyName,
        ...(description ? { description } : {}),
        ...(contactEmail && contactName
          ? {
              contacts: [
                {
                  name: contactName,
                  email: contactEmail,
                  emails: [
                    {
                      type: "office",
                      email: contactEmail,
                    },
                  ],
                },
              ],
            }
          : {}),
      };
    },
  },
  customActivity: {
    type: {
      create({ name, description }: LFACustomActivityTypeCreate) {
        return {
          name: name,
          description: description,
          api_create_only: false,
          editable_with_roles: ["admin"],
        };
      },
    },
  },
  customField: {
    activity: {
      create({
        custom_activity_type_id,
        name,
        type,
        required,
        accepts_multiple_values,
      }: LFACustomActivityFieldCreate) {
        return {
          custom_activity_type_id,
          name,
          type,
          required,
          accepts_multiple_values,
          editable_with_roles: [],
        };
      },
    },
  },
};