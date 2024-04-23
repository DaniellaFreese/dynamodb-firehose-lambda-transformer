import { handler } from '../../app';
import { FirehoseTransformationEvent, FirehoseTransformationResult } from 'aws-lambda';
import { expect, describe, it } from '@jest/globals';

describe('Unit test for app handler', function () {
    it('INSERT - verifies successful response', async () => {
        const event: FirehoseTransformationEvent = {
            invocationId: 'invoked123',
            deliveryStreamArn: 'aws:lambda:events',
            region: 'us-west-2',
            records: [
                {
                    data: 'eyJhd3NSZWdpb24iOiJ1cy13ZXN0LTIiLCJldmVudElEIjoiYmNjMThjYzAtN2ZlNS00Y2VmLWFjYTYtZjllOTRjMmJhYzBlIiwiZXZlbnROYW1lIjoiSU5TRVJUIiwidXNlcklkZW50aXR5IjpudWxsLCJyZWNvcmRGb3JtYXQiOiJhcHBsaWNhdGlvbi9qc29uIiwidGFibGVOYW1lIjoiZGYtdGVzdC10YWJsZSIsImR5bmFtb2RiIjp7IkFwcHJveGltYXRlQ3JlYXRpb25EYXRlVGltZSI6MTcxMzgxNzYxNTg4MTg3MiwiS2V5cyI6eyJmaXJzdF9pbmRleCI6eyJTIjoiNCJ9fSwiTmV3SW1hZ2UiOnsiZmlyc3RfaW5kZXgiOnsiUyI6IjQifSwiaGVsbG8iOnsiUyI6IndvcmxkIn0sImZvbyI6eyJTIjoiYmFyIn0sInBlcnNvbiI6eyJNIjp7Im5hbWUiOnsiUyI6ImRhbm55In0sIndoZXJlIjp7IlMiOiJ0aGUgY29kZSBmcmVlc2UifX19fSwiU2l6ZUJ5dGVzIjo4MCwiQXBwcm94aW1hdGVDcmVhdGlvbkRhdGVUaW1lUHJlY2lzaW9uIjoiTUlDUk9TRUNPTkQifSwiZXZlbnRTb3VyY2UiOiJhd3M6ZHluYW1vZGIifQ==',
                    recordId: '123',
                    approximateArrivalTimestamp: 1510772160000,
                },
            ],
        };
        const result: FirehoseTransformationResult = await handler(event);

        expect(result.records.length).toBe(1);
        console.log(result.records[0].data);
    });
});
