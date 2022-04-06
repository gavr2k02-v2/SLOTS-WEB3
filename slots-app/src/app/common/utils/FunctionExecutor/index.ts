import { Observable, ReplaySubject, Subject } from 'rxjs';
import Swal from 'sweetalert2';

export type ExecutorResult<T> = {
  success: boolean;
  data?: T;
};

export type ExecutorErrorParams = {
  title?: string;
  text?: string;
  needShowLoader?: boolean;
};

const DEFAULT_PARAMS: ExecutorErrorParams = {
  title: 'Error',
  text: 'Something went wrong',
  needShowLoader: false,
};

export class FunctionExecutor {
  private static readonly _loadSubject: Subject<boolean> = new ReplaySubject(1);
  public static readonly load: Observable<boolean> = this._loadSubject;

  public static async execute<T>(fn: () => Promise<T>, params = DEFAULT_PARAMS): Promise<ExecutorResult<T>> {
    try {
      params.needShowLoader && this._loadSubject.next(true);
      const result = await fn();
      return { success: true, data: result };
    } catch (e) {
      console.warn(e);
      Swal.fire(params.title || DEFAULT_PARAMS.title, params.text || DEFAULT_PARAMS.text, 'error');
      return { success: false, data: undefined };
    } finally {
      params.needShowLoader && this._loadSubject.next(false);
    }
  }
}
