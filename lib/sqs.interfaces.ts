import { ModuleMetadata } from '@nestjs/common';
import * as SQS from 'aws-sdk/clients/sqs';

import { SqsConfig } from './sqs.config';
import { SqsConsumerEvent, SqsQueueOptions } from './sqs.types';

export interface Message<T = any> {
  id: string;
  body: T;
  groupId?: string;
  deduplicationId?: string;
  delaySeconds?: number;
  messageAttributes?: SQS.MessageBodyAttributeMap;
}

export type SqsConfigT = { cfg: SqsConfig; queue: SqsQueueOptions };

export interface SqsAsyncConfig extends Pick<ModuleMetadata, 'imports'> {
  useFactory?: (...args: any[]) => SqsConfigT | Promise<SqsConfigT>;
  inject?: any[];
}

export interface SqsMessageHandlerMeta {
  batch?: boolean;
}

export interface SqsConsumerEventHandlerMeta {
  eventName: SqsConsumerEvent;
}

export interface SqsProcessMeta {
  name: string;
}
