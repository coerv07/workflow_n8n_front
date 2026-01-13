// components/nodes/index.ts
import type { NodeTypes } from '@xyflow/react';
import { InitialNode } from './initial-nodes';
// import { HttpRequestNode } from './http-request-node';

export const NodeComponents = {
  INITIAL: InitialNode,
  // HTTP_REQUEST: HttpRequestNode,
  // MANUAL_TRIGGER: ManualTriggerNode,
} as const satisfies NodeTypes;

export type RegisteredNodeType = keyof typeof NodeComponents;
