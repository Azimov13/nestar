import { Injectable } from '@nestjs/common';

@Injectable()
export class BatchService {
	public async batchRollback(): Promise<void> {
		console.log('batchRollback');
	}

	public async batchProperties(): Promise<void> {
		console.log('batchProperties');
	}

	public async batchAgent(): Promise<void> {
		console.log('batchAgent');
	}

	getHello(): string {
		return 'Welcome to Nestar BATCH Server!';
	}
}
