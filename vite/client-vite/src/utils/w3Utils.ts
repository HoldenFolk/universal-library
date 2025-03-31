import * as DelegationTools from '@web3-storage/w3up-client/delegation';
import * as Client from '@web3-storage/w3up-client';
import type { Delegation } from '@ucanto/interface';
import type { Capabilities } from '@ucanto/interface';

export const createClient = async (): Promise<Client.Client> => {
  const client = await Client.create();
  return client;
};

export const deserializeDelegation = async (
  base64: string
): Promise<Delegation<Capabilities>> => {
  const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
  const result = await DelegationTools.extract(bytes);

  if (!result.ok) {
    throw new Error('Failed to extract delegation');
  }

  return result.ok;
};

export const proveDelegationCapabilities = async (
  delegation: Delegation<Capabilities>,
  client: Client.Client
): Promise<void> => {
  const space = await client.addSpace(delegation);
  client.setCurrentSpace(space.did());
};
