import { ExceptionWrapper } from '@jonahsnider/nextjs-api-utils';
import { BaseHttpException } from './_lib/exceptions/base.exception';

function isException(maybeException: unknown): maybeException is BaseHttpException {
	return maybeException instanceof BaseHttpException;
}

export const exceptionRouteWrapper = new ExceptionWrapper(isException);